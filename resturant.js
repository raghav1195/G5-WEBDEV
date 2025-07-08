console.log("script.js is running");

function walkinres(cb){
    console.log("Welcome to the restaurant");
    setTimeout(cb, 2000);
}

function checkmenu(cb){
    console.log("i am checking the menu");
    setTimeout(cb, 2000);
}

function orderfood(cb){
    console.log("I am ordering food");
    setTimeout(cb, 3000);
}

function havefood(cb){
    console.log("I am having food");
    setTimeout(cb, 4000);
}

function paybill(cb){
    console.log("I am paying the bill");
    setTimeout(cb, 5000);
}

function leave(cb){
    console.log("I am leaving the restaurant");
    setTimeout(cb, 4000);
}                                                                                                                   
    walkinres(() => {
        checkmenu(() => {
            orderfood(() => {
                havefood(() => {
                    paybill(() => {
                        leave(() => {
                            console.log("Thank you for visiting our restaurant!");
                        });
                    });
                });
            });
        });
    });