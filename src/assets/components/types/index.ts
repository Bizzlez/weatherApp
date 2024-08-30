export type cityType = {
    name: string
    coord: any
    lat:number
    lon:number
    dt:number
    timezone:number
  
}
export type forecastType = {
    coord: any
    name:string
    country:string
    sunrise:number
    sunset:number
    
    list:[
        {
        dayOfWeek: string
        dt: number
        main:{
            feels_like: number
            humidity: number
            pressure: number
            temp: number
            temp_max: number
            temp_min: number
        }
        weather:[{
            main:string
            icon:string
            description: string
        }]
        wind:{
            speed:number
            gust:number
            deg:number
        
        }
        clouds:{
            all:number
        }
        dt_txt:string
        pop:number
        visibility:number
        
    }       

    ]
}


