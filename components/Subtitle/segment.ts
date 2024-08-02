import type { BoundaryData } from "./data";
// import { boundaries } from "./data";

export type Boundary = BoundaryData & {
  offset: number
}

export interface Screen {
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

  for (let index = 0; index < boundaries.length; index++) {
    const boundary = boundaries[index]
    if (isPunctuation(boundary.text) || boundary.duration === 0) {
      if (!currentGroups.length) continue;

      result.push({
        groups: currentGroups.slice(),
        audio_offset: offset,
        ...accumulation(currentGroups)
      })
      offset = boundary.audio_offset
      currentGroups = []
    } else {
      const duration = index + 1 < boundaries.length
        ? boundaries[index+1].audio_offset - boundaries[index].audio_offset
        : boundary.duration

      currentGroups.push({
        ... boundary,
        duration,
        offset: boundary.audio_offset - offset
      })
    }
  }

  if (!!currentGroups.length) {
    result.push({
      groups: currentGroups.slice(),
      audio_offset: offset,
      ...accumulation(currentGroups)
    })
  }

  return result;
};


// const subtitleSegments = splitBoundaries(boundaries);
// console.log(subtitleSegments);
