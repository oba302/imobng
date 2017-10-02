export interface Dashboard { 
  _id: any, 
  updated_at: string,
  created_at: string,
  name: string,
  bags: Bag[]
}

export interface Bag {
  bag_class: string,
  charts: Chart[]
}

export interface Chart {  
  title: string,
  kind: string,
  query: {
    select: string,
    from: string,
    where: string[]
  }
}