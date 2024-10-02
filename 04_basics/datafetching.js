const books = [
    {title: 'Book one',genre:'Fiction', publish :1981, edition:1981 },
    {title: 'Book two',genre:'Non-Fiction', publish :1992, edition:2008},
    {title: 'Book three',genre:'History', publish :1999, edition:2007 },
    {title: 'Book four',genre:'Non-Fiction', publish :1989, edition:2010 },
    {title: 'Book five',genre:'Science', publish :2009, edition:2014 },
    {title: 'Book six',genre:'Fiction', publish :1987, edition:2010 },
    {title: 'Book seven',genre:'History', publish :1986, edition:1996 },
    {title: 'Book eight',genre:'Science', publish :2011, edition:2016 },
]
let myBooks = books.filter ((bk)=>bk.genre==='History')
myBooks = books.filter ((bk)=>bk.publish>=1995&& bk.genre==='History')
console.log (myBooks)