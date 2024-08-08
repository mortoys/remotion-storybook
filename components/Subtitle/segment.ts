import type { BoundaryData } from "@/components/Subtitle/Motion";
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

// const accumulation = (groups: Boundary[]) => {
//   return groups.reduce((acc, item) => ({
//       duration: acc.duration + item.duration
//   }), {
//     duration: 0
//   })
// }

export const splitBoundaries = (boundaries: BoundaryData[]): Screen[] => {
  const result: Screen[] = []

  let currentGroups: Boundary[] = []
  // offset 的分界点在 最后一条 的 offset 加 最后一条 duration
  let offset = 0

  for (let index = 0; index < boundaries.length; index++) {
    const boundary = boundaries[index]
    if (isPunctuation(boundary.text) || boundary.duration === 0) {
      if (!currentGroups.length) continue;

      result.push({
        groups: currentGroups.slice(),
        audio_offset: offset,
        // ...accumulation(currentGroups)
        duration: boundary.audio_offset + boundary.duration - offset
      })
      offset = boundary.audio_offset + boundary.duration
      currentGroups = []
    }
    else {
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
      // ...accumulation(currentGroups)
      duration: currentGroups[currentGroups.length - 1].audio_offset
        + currentGroups[currentGroups.length - 1].duration - offset
    })
  }

  console.log('result', result)
  console.log('result duration', result.reduce((s,i)=>s+i.duration, 0))

  return result;
};


// const subtitleSegments = splitBoundaries(boundaries);
// console.log(subtitleSegments);
