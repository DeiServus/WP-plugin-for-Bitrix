console.log("Проверка");
window.onload = function() {
    let form = document.getElementById('uptocall-form');
    if (form) {
        form.addEventListener('submit', function(e) {       
            e.preventDefault();  
            let phone = document.getElementById('uptocall-phone').value;
            let originalData = new FormData(form);
            let data = {
                "FIELDS":{
                    "TITLE":"Заявка с сайта " + document.location.hostname,
                    "HAS_PHONE": true,
                    "PHONE":[ { "VALUE": phone, "VALUE_TYPE": "WORK" } ],
                    "UTM_SOURCE":window.location.href,
                    "SOURCE_ID": "WEB"
                }
            };
            
            let jsonData = JSON.stringify(data);

            fetch("https://evroplast.bitrix24.by/rest/11/yig6yzoqh35b04ge/crm.lead.add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: jsonData
            })
            fetch(form.action, {
                method: form.method,
                body: originalData
            })
        });
    } else {
        console.error('Form not found');
    }
};

document.addEventListener('DOMContentLoaded', function(){
    var forms = document.querySelectorAll('.elementor-form');
    forms.forEach(function(form) {
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault(); 



                let names = ['ЧАСТНЫЕ ДОМА И КОТТЕДЖИ', 'ГОРОДСКИЕ КВАРТИРЫ', 'КОММЕРЧЕСКИЕ ПОМЕЩЕНИЯ', 'ПЛОЩАДИ БОЛЕЕ 500 М2'];
                let data = {};
                let originalData = new FormData(form);

                if (form.getAttribute('name') === 'СПЕЦИАЛЬНАЯ АКЦИЯ!​') {
                    let square = document.getElementById('form-field-email').value;
                    let phone = document.getElementById('form-field-message').value;
                    
                    data = {
                        "FIELDS":{
                            "TITLE":"Заявка с сайта " +document.location.hostname,
                            "HAS_PHONE": true,
                            "PHONE":[ { "VALUE": phone, "VALUE_TYPE": "WORK" } ],
                            "COMMENTS": "Площадь "+square + " м2.",
                            "UTM_SOURCE": window.location.href,
                            "SOURCE_ID": "WEB"
                        }
                    };
                    
                    let jsonData = JSON.stringify(data);
                    fetch("https://evroplast.bitrix24.by/rest/11/yig6yzoqh35b04ge/crm.lead.add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: jsonData
                    })
                } else if (form.getAttribute('name') === 'БЕСПЛАТНЫЙ РАСЧЕТ СТОИМОСТИ') {
                    let room = form.elements['form_fields[name]'].value;

                    let sound = form.elements['form_fields[field_22658db]'].checked;
                    let soundData = "";
                    sound?soundData="доп. звукоизоляция есть":soundData="доп. звукоизоляции нет";

                    let water = form.elements['form_fields[field_32263b4]'].checked;
                    let waterData = "";
                    water?waterData="доп. гидроизоляция есть":waterData="доп. гидроизоляции нет";

                    let temprature = form.elements['form_fields[field_3eb4006]'].checked;
                    let tempratureData = "";
                    temprature?tempratureData="доп. теплоизоляция есть":tempratureData="доп. теплоизоляции нет";

                    let floor = form.elements['form_fields[email]'].value;
                    let square = form.elements['form_fields[message]'].value;
                    let address = form.elements['form_fields[field_143f774]'].value;
                    let phone = form.elements['form_fields[field_77895d1]'].value;


                    data = {
                        "FIELDS":{
                            "TITLE":"Заявка с сайта " +document.location.hostname,
                            "HAS_PHONE": true,
                            "PHONE":[ { "VALUE": phone, "VALUE_TYPE": "WORK" } ],
                            "COMMENTS":"Этаж " + floor + ", тип помещения " + room + ", площадь "+square+" м2, " +
                            soundData + ", " + waterData + ", " + tempratureData + ", адрес " + address + ".",
                            "UTM_SOURCE":window.location.href,
                            "SOURCE_ID": "WEB"
                        }
                    };

                    let jsonData = JSON.stringify(data);

                    fetch("https://evroplast.bitrix24.by/rest/11/yig6yzoqh35b04ge/crm.lead.add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: jsonData
                    })
                } else if (names.includes(form.getAttribute('name'))) {
                    let square = form.elements["form_fields[name]"].value;
                    let phone = form.elements["form_fields[message]"].value;

                    data = {
                        "FIELDS":{
                            "TITLE":"Заявка с сайта " +document.location.hostname,
                            "HAS_PHONE": true,
                            "PHONE":[ { "VALUE": phone, "VALUE_TYPE": "WORK" } ],
                            "COMMENTS": "Площадь "+square + " м2.",
                            "UTM_SOURCE":window.location.href,
                            "SOURCE_ID": "WEB"
                        }
                    };
                    
                    let jsonData = JSON.stringify(data);

                    fetch("https://evroplast.bitrix24.by/rest/11/yig6yzoqh35b04ge/crm.lead.add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        body: jsonData
                    })
                }
                console.log(form.action);
                fetch(form.action, {
                    method: form.method,
                    body: originalData
                })
            });
        } else {
            console.error('Form not found');
        }
    });
});
