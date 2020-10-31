class Formatter {
  //add static methods here
  constructor(str){
  }
  static capitalize(str){
    return str[0].toUpperCase()+str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^a-zA-Z\d\s'-]+/gi,"");
  }

  static titleize(str){
    const splitted = str.split(" ");
    const regex = /the|a\b\s+| an |but|of|for|and|at|by|from|/i;
    const propositions = ["the","a","an","but","for","of","and","at","by","from"]
    const result = [];
    result.push(this.capitalize(splitted[0]))
    for (const word of splitted.slice(1)){
      if (!propositions.some((prop) => prop === word)){
        result.push(this.capitalize(word));
      }
      else{
        result.push(word.toLowerCase())
      }
    }
    return result.join(" ");
  }
}

Formatter.titleize("majd")