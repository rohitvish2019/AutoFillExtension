const site = window.location.hostname;

console.log("Running scripts");
let samagra = document.getElementById('ctl00_ctl00_rmp_main_dpPH_lblsamgraID').innerText;
console.log('samagra is '+samagra);

$.ajax({
    url:'https://localhost/student/samagra/profile',
    type:'Get',
    data:{
        SSSM:samagra
    },
    success:function(data){
        console.log('Success');
        setValues(data.student);
    },
    error:function(err){console.log(err.responseText)}
})

function setValues(student){
    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtFatherName')[0].value=student.FathersName;
    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtMotherName')[0].value=student.MothersName;
    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtAnualIncome')[0].value='Familiy Annual income';

    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$lblMobileNo')[0].value='Mobile No'
    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtEmail')[0].value='Email'
    document.getElementsByName('ctl00_ctl00_rmp_main_dpPH_lblCurrentClass')[0].value='Current Class'
    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtPercentage')[0].value='Last Class Per'

    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtInstituteName')[0].value='Last Schhol Name'
    document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$txtDigitalCastCertifiedNo')[0].value = 'Digital Cast Certificate'
}


/*
ctl00$ctl00$rmp_main$dpPH$ddlLastExamYear = last exam year


//selects :

//select values : 1:Hindu,2:Islam,4:Christian,5:Sikh,6:Buddist,7:Jain,8:Persian,9:Other
document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$ddlReligion')[0].value='Religion';

//select values : 1:SC, 4:General, 2:ST
document.getElementsByName('ctl00$ctl00$rmp_main$dpPH$ddlCategory')[0].value='Category';




//Select values : 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:'More than 5'
ctl00$ctl00$rmp_main$dpPH$ddlNoOfSiblings = number of siblings
//select values = 0:no, 1: yes
ctl00$ctl00$rmp_main$dpPH$ddlAlive = is father alive


// select values 1:म.प्र.भवन एवं संनिर्माण कर्मकार, 2:किसान, 3:मंडी हम्माल तुलावटी, 6:मृत/ अपंग/ सेवानिवृत्त शासकीय कर्मचारी
//8:सरकारी सेवा, 9:निजी सेवा, 10: व्यापार, 11:मजदूरी, 12:अन्य , 13:अस्वच्छ धंधा, 14: गृहणी
ctl00$ctl00$rmp_main$dpPH$ddlOccupation = fathers occupation
ctl00$ctl00$rmp_main$dpPH$ddlMotherOccupation = mothers occupation


//select values 0:none of mentioned, 2:घुमक्कड, 1:विमुक्त, 3:अर्ध-घुमक्कड
ctl00$ctl00$rmp_main$dpPH$ddlVimuktStatus = vimukt status


// select values 1: with parents, 2:without adult protection
ctl00$ctl00$rmp_main$dpPH$ddlChildHomeLessType = is child homeless




//radio, id:checked
name : ctl00$ctl00$rmp_main$dpPH$rblIsOrphan, id: ctl00_ctl00_rmp_main_dpPH_rblIsOrphan_1




//radio checked
ctl00$ctl00$rmp_main$dpPH$rblIsIncomeTaxPayee = income tax payer

//radio checked
ctl00$ctl00$rmp_main$dpPH$rblIsTwoChild = are only 2 students taking scholarship

ctl00_ctl00_rmp_main_dpPH_txtInstituteName = Last school name

//select values

ctl00_ctl00_rmp_main_dpPH_ddlSchoolStatus = current status of student
///NA , will change every year


  */