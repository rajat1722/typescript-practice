type Point = {
    x: number
    y: number
}

type ReadOnly<Type> = {
    readonly [key in keyof Type]: Type[key]
}

const check: ReadOnly<Point> = {
    x: 1, 
    y: 2
}


// modifiers
type Point1 = {
    readonly x: number
    y?: number
}

type NotOptionalY<Type> = {
    [key in keyof Point1] -?: Point1[key]
}

const check1: NotOptionalY<Point1> = {
    x: 1,
    y: 2
}