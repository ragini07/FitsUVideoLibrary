import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Music",
    imageURL : "https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "Science",
    imageURL : "https://media.istockphoto.com/photos/cells-in-reproductive-female-cytology-and-histology-concept-medical-picture-id1194619562?b=1&k=20&m=1194619562&s=170667a&w=0&h=U08B2bgf6SzpSxaC5YuIFjEuSwJvpbWbeLsJBwkQYpw=",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "Art",
    imageURL : "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "History",
    imageURL : "https://media.istockphoto.com/photos/vittala-temple-stone-chariothampikarnatakaindia-picture-id137336783?b=1&k=20&m=137336783&s=170667a&w=0&h=CkJZkRxnKWxW0vnS18FBmlYrLivcbJ-gLMRRthSUqS4=",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
];
