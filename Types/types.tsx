export type Cardtype={
    imageUrl:string,
    heading:string,
    id:number


}

export type Commentlist={
    id:string,
    name:string,
    comment:string,
    
}

export type Addcommentprop={
    func:(newArray:Commentlist)=>void,
    Comment:Commentlist,
    func2:(newArray:Commentlist)=>void,

}