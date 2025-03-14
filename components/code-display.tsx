"use client"

import React, { useState, useRef, useEffect } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import Prism from "prismjs"

// Import Prism core and language support
import "prismjs/components/prism-core"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-css"
import "prismjs/components/prism-scss"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markdown"

// Import Prism themes - choose one or create your own
import "prismjs/themes/prism-tomorrow.css"

interface CodeDisplayProps {
  code: string;
  language?: string;
  expandable?: boolean;
  showLineNumbers?: boolean;
  defaultExpanded?: boolean;
  maxHeight?: number;
  fileName?: string;
}

export function CodeDisplay({ 
  code, 
  language = "tsx", 
  expandable = false,
  showLineNumbers = true,
  defaultExpanded = false,
  maxHeight = 350,
  fileName,
}: CodeDisplayProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [matchCount, setMatchCount] = useState(0)
  const [currentMatch, setCurrentMatch] = useState(0)
  const codeRef = useRef<HTMLPreElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Map language to Prism language class
  const getPrismLanguage = (lang: string) => {
    const langMap: Record<string, string> = {
      "js": "javascript",
      "jsx": "jsx",
      "ts": "typescript",
      "tsx": "tsx",
      "css": "css",
      "scss": "scss",
      "html": "markup",
      "bash": "bash",
      "sh": "bash",
      "md": "markdown",
      "json": "json"
    }
    return langMap[lang.toLowerCase()] || lang.toLowerCase()
  }

  // Apply syntax highlighting
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language, expanded])

  // Handle search functionality
  useEffect(() => {
    if (!showSearch || !searchQuery) {
      // Reset highlights if search is closed or query is empty
      if (codeRef.current) {
        const codeContent = codeRef.current.innerHTML
        codeRef.current.innerHTML = codeContent.replace(/<mark class="code-search-highlight.*?>(.*?)<\/mark>/g, "$1")
        setMatchCount(0)
        setCurrentMatch(0)
      }
      return
    }

    if (codeRef.current && searchQuery) {
      // First, remove any existing highlights
      let codeContent = codeRef.current.innerHTML
      codeContent = codeContent.replace(/<mark class="code-search-highlight.*?>(.*?)<\/mark>/g, "$1")
      
      if (!searchQuery.trim()) {
        codeRef.current.innerHTML = codeContent
        setMatchCount(0)
        return
      }

      // Create a regex that ignores HTML tags
      const searchRegex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
      let match
      let matches = []
      let tempDiv = document.createElement('div')
      tempDiv.innerHTML = codeContent
      const textContent = tempDiv.textContent || tempDiv.innerText
      
      while ((match = searchRegex.exec(textContent)) !== null) {
        matches.push(match.index)
      }
      
      setMatchCount(matches.length)
      setCurrentMatch(matches.length > 0 ? 1 : 0)

      // Replace with highlights
      if (matches.length > 0) {
        let lastIndex = 0
        let result = ''
        let textIndex = 0
        let inTag = false
        
        for (let i = 0; i < codeContent.length; i++) {
          if (codeContent[i] === '<') inTag = true
          if (!inTag) textIndex++
          if (codeContent[i] === '>') inTag = false
          
          if (!inTag && matches.includes(textIndex - searchQuery.length)) {
            result += `<mark class="code-search-highlight">${codeContent.substr(i, searchQuery.length)}</mark>`
            i += searchQuery.length - 1
            textIndex += searchQuery.length - 1
          } else {
            result += codeContent[i]
          }
        }
        
        codeRef.current.innerHTML = result
      } else {
        codeRef.current.innerHTML = codeContent
      }
    }
  }, [searchQuery, showSearch])

  // Focus search input when search is shown
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Navigate between search matches
  const navigateMatches = (direction: 'next' | 'prev') => {
    if (matchCount === 0) return
    
    if (direction === 'next') {
      setCurrentMatch(prev => prev === matchCount ? 1 : prev + 1)
    } else {
      setCurrentMatch(prev => prev === 1 ? matchCount : prev - 1)
    }
    
    // Scroll to the current match
    if (codeRef.current) {
      const marks = codeRef.current.querySelectorAll('mark.code-search-highlight')
      if (marks.length > 0) {
        const index = direction === 'next' 
          ? (currentMatch === matchCount ? 0 : currentMatch)
          : (currentMatch === 1 ? marks.length - 1 : currentMatch - 2)
          
        if (marks[index]) {
          marks[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    }
  }

  // Convert language to display format
  const displayLanguage = language.toUpperCase()

  // Generate line numbers
  const lineCount = code.split('\n').length
  const lineNumbers = showLineNumbers 
    ? (
      <div className="select-none text-right pr-4 border-r border-gray-700 mr-4 opacity-70 text-xs">
        {Array.from({ length: lineCount }).map((_, i) => (
          <div key={i + 1} className="leading-relaxed">
            {i + 1}
          </div>
        ))}
      </div>
    )
    : null

  return (
    <div className="relative rounded-md border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="flex items-center gap-3">
          {fileName && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mr-2">
              <span className="font-medium">{fileName}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-1 text-xs font-medium rounded bg-gray-200 dark:bg-gray-800">
              {displayLanguage}
            </span>
            {matchCount > 0 && (
              <span className="text-xs text-muted-foreground">
                {currentMatch}/{matchCount} matches
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setShowSearch(!showSearch)}
            title={showSearch ? "Close search" : "Search in code"}
          >
            {showSearch ? (
              <X className="h-4 w-4" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
          
          {expandable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="h-8 gap-1 text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3 w-3" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3" />
                  Expand
                </>
              )}
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={copyToClipboard}
            title="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      {showSearch && (
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search in code..."
            className="h-8 text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (e.shiftKey) {
                  navigateMatches('prev')
                } else {
                  navigateMatches('next')
                }
              }
            }}
          />
          {matchCount > 0 && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => navigateMatches('prev')}
                disabled={matchCount === 0}
                title="Previous match"
              >
                <ChevronUp className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => navigateMatches('next')}
                disabled={matchCount === 0}
                title="Next match"
              >
                <ChevronDown className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      )}
      
      <div 
        className={cn(
          "relative overflow-hidden bg-gray-950",
          !expanded && expandable && `max-h-[${maxHeight}px]`,
          expanded && "transition-all duration-500"
        )}
        style={{ maxHeight: expanded ? 'none' : `${maxHeight}px` }}
      >
        <div className="overflow-auto">
          <div className="flex min-w-full">
            {lineNumbers}
            <pre 
              ref={codeRef}
              className={cn(
                "language-" + getPrismLanguage(language),
                "overflow-x-auto p-4 text-sm flex-1 leading-relaxed font-mono"
              )}
            >
              {code}
            </pre>
          </div>
        </div>
        
        {expandable && !expanded && (
          <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-gray-950 to-transparent pt-24 pb-4">
            <Button 
              variant="outline"
              size="sm" 
              onClick={() => setExpanded(true)}
              className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 z-10"
            >
              <ChevronDown className="h-3 w-3 mr-2" />
              Show more
            </Button>
          </div>
        )}
      </div>

      <style jsx global>{`
        .code-search-highlight {
          background-color: rgba(255, 255, 0, 0.3);
          border-radius: 2px;
          padding: 1px 0;
        }
      `}</style>
    </div>
  )
} 