// const greeting = (person: string) => {
//     console.log('good day' + person);
// };
// greeting('Daniel')

interface User {
    name: string;
    id: number;
}

class Useraccount {
    name: string;
    id: number


constructor(name: string, id: number){
    this.name= name;
    this.id = id
}
}

const user: User = new Useraccount ("Murphy" , 1);