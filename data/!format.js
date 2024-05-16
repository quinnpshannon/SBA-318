//Ok, let's design some data that we want to use
//Also, let's make them relationally connected
//so we can use some information from the in the future

class Task {
    id=0;
    title='';
    desc='';
    points=0;
    complete=false;
    indexRow=0;
    indexcolumn=0;
}

class Board {
    id=0;
    sessionid='';
    ownerUserID='';
    rows=5;
    columns=5;
    winner=false;
}