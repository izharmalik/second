const num = [1,5,6,7,8,];

const result = num.map(num => num*2);

console.log(result);


const studentdata = [
                    {Name : "raman" , Degree : "MBA"},
                    {Name : "raman" , Degree : "BA"},
                    {Name : "raman" , Degree : "BCA"},
                    {Name : "raman" , Degree : "MCA"},
                     ];

    const newdata = studentdata.map((studentdata) => {
        return `My Name is ${ studentdata.Name}.My Highest Degree is ${ studentdata.Degree}`;
    } 
    );

    // console.log(newdata);



    const age = [15,20,30,27,21];

    const find = age.filter(ages);

    function ages (age){
        return age >= 18;
    } 
    
    console.log(find);


    