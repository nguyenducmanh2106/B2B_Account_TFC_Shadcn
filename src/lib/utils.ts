import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { memoize } from "lodash-es"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type OS = "macOS" | "iOS" | "Windows" | "Android" | "Linux" | ""
export const getOS = memoize((): OS => {
  const { userAgent } = window.navigator
  const { platform } = window.navigator
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"]
  const iosPlatforms = ["iPhone", "iPad", "iPod"]
  let os = ""

  if (macosPlatforms.includes(platform)) {
    os = "macOS"
  } else if (iosPlatforms.includes(platform)) {
    os = "iOS"
  } else if (windowsPlatforms.includes(platform)) {
    os = "Windows"
  } else if (/Android/.test(userAgent)) {
    os = "Android"
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux"
  }

  return os as OS
})

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number
    sizeType?: "accurate" | "normal"
  } = {}
) {
  const { decimals = 0, sizeType = "normal" } = opts

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"]
  if (bytes === 0) return "0 Byte"
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`
}