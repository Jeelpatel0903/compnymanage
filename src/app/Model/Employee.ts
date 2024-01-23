export class Employee{
    id : number | null = null
    name:string | null = null
    gst:string | null = null

    constructor(initializer?: Partial<Employee>){
        if(!!initializer){
            Object.assign(this,initializer)
        }
    }


}