export class Dashboard {
   constructor(
      evolution?: {
         data?: [
           {
             x?: 0,
             y?: 0
           }
         ],
         xLabel?: string,
         yLabel?: string
       },
       rain?: {
         data?: [
           {
             x?: 0,
             y?: 0
           }
         ],
         xLabel?: string,
         yLabel?: string
       },
       efficiency?: {
         data?: 0,
         label?: string
       }
   ) {}
}