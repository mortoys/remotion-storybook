import type { BoundaryData } from "./data";
// import { boundaries } from "./data";

type Boundary = BoundaryData & {
  offset: number
}

interface Screen {
  duration: number;
  groups: Boundary[];
  audio_offset: number;
}

const isPunctuation = (text: string): boolean => 
  [".", "。", "？", "！"].includes(text)

const accumulation = (groups: Boundary[]) => {
  return groups.reduce((acc, item) => ({
      duration: acc.duration + item.duration
  }), {
    duration: 0
  })
}

export const splitBoundaries = (boundaries: BoundaryData[]): Screen[] => {
  const result: Screen[] = []

  let currentGroups: Boundary[] = []
  let offset = 0

  boundaries.forEach((boundary) => {
    if (isPunctuation(boundary.text) || boundary.duration === 0) {
      result.push({
        groups: currentGroups.slice(),
        audio_offset: offset,
        ...accumulation(currentGroups)
      })
      offset = boundary.audio_offset
      currentGroups = []
    } else {
      boundary.duration
      currentGroups.push({
        ... boundary,
        offset: boundary.audio_offset - offset
      })
    }
  });

  result.push({
    groups: currentGroups.slice(),
    audio_offset: offset,
    ...accumulation(currentGroups)
  })

  return result;
};


// const subtitleSegments = splitBoundaries(boundaries);
// console.log(subtitleSegments);
