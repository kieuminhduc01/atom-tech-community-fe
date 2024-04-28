import clsx from 'clsx'
import { twMerge } from 'tw-merge'

/**
 * Merge all class into a string separated by space and remove duplicate
 * class that have same css attribute
 * example : "bg-slate-400 text-blue-100 text-red-100" =>"bg-slate-400 text-red-100"
 * @param {string} listClass - list class in to merge
 * @returns {string} - string contain all classes after merge
 */

const tailwindMerge = (...listClass) => twMerge(clsx(listClass))
export default tailwindMerge
