"use client";

import * as React from "react";
import { Airport } from "@/types";
import { Input } from "@/components/ui/input";

interface AirportSearchProps {
  label: string;
  placeholder?: string;
  onSelect: (airport: Airport) => void;
  defaultValue?: string;
}

export function AirportSearch({ label, placeholder, onSelect, defaultValue }: AirportSearchProps) {
  const [query, setQuery] = React.useState(defaultValue || "");
  const [results, setResults] = React.useState<Airport[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const lastSelectedCode = React.useRef<string | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    // Skip search if the query matches the last selected airport string
    if (lastSelectedCode.current && query.includes(`(${lastSelectedCode.current})`)) {
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/airports?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Search failed");
        const data = await res.json();
        setResults(data);
        setIsOpen(true);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Failed to fetch airports", err);
        }
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <Input
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
          lastSelectedCode.current = null;
        }}
        onFocus={() => {
          if (results.length > 0) setIsOpen(true);
        }}
      />
      {isOpen && (results.length > 0 || isLoading) && (
        <div
          role="listbox"
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-zinc-200 bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 sm:text-sm"
        >
          {isLoading ? (
            <div className="relative cursor-default select-none px-4 py-2 text-zinc-500">
              Searching...
            </div>
          ) : (
            results.map((airport) => (
              <div
                key={airport.code}
                role="option"
                aria-selected={false}
                className="relative cursor-pointer select-none px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                onClick={() => {
                  lastSelectedCode.current = airport.code;
                  setQuery(`${airport.city} (${airport.code})`);
                  setResults([]);
                  setIsOpen(false);
                  onSelect(airport);
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="block truncate font-medium">
                    {airport.city} ({airport.code})
                  </span>
                  <span className="text-xs text-zinc-500">{airport.country}</span>
                </div>
                <span className="block truncate text-xs text-zinc-500">{airport.name}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
