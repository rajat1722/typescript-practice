// type EmailLocaleIDs = "welcome_email" | "email_heading"
// type FooterLocaleIDs = "footer_title" | "footer_sendoff"

// type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`

// type Lang = "en" | "ja" | "pt"

// type localMessageIDs = `${Lang}_${AllLocaleIDs}`


// type PropEventSource<Type> = {
//     on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void
// }

// declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>


// const person = makeWatchedObject({
//     firstName: "Rajat",
//     lastName: "Rana",
//     age: 19
// })

// person.on("ageChanged", newValue=>{
//     console.log(`Age was changes to ${newValue}`)
// })


type PropEventSource<Type> = {
    on<key extends string & keyof Type>
        (eventName: `${key}Changed`, callback: (newValue: Type[key]) => void): void
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>


const person = makeWatchedObject({
    firstName: "Rajat",
    lastName: "Rana",
    age: 19
})

person.on("ageChanged", newValue=>{
    console.log(`Age was changes to ${newValue}`)
})