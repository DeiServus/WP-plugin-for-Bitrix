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
                    "TITLE":"styazhka",
                    "UF_CRM_1706712641364": phone
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
                            "TITLE":"styazhka",
                            "UF_CRM_1706712641364": phone,
                            "UF_CRM_1706714277112": square
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
                    let roomCodes = {
                        "Квартира": "133",
                        "Дом/Дача": "135",
                        "Коммерческое помещение": "137",
                        "Склад/паркинг": "139"
                    };
                    let roomData = roomCodes[room] || "133";

                    let sound = form.elements['form_fields[field_22658db]'].checked;
                    let soundData = "";
                    sound?soundData="141":soundData="143";

                    let water = form.elements['form_fields[field_32263b4]'].checked;
                    let waterData = "";
                    water?waterData="145":waterData="147";

                    let temprature = form.elements['form_fields[field_3eb4006]'].checked;
                    let tempratureData = "";
                    temprature?tempratureData="149":tempratureData="151";

                    let floor = form.elements['form_fields[email]'].value;
                    let square = form.elements['form_fields[message]'].value;
                    let address = form.elements['form_fields[field_143f774]'].value;
                    let phone = form.elements['form_fields[field_77895d1]'].value;


                    data = {
                        "FIELDS":{
                            "TITLE":"styazhka",
                            "UF_CRM_1706712641364": phone,
                            "UF_CRM_1706714277112": square,
                            "UF_CRM_1706714831069": roomData,
                            "UF_CRM_1706715535112": floor,
                            "UF_CRM_1706715607221": soundData,
                            "UF_CRM_1706715694976": waterData,
                            "UF_CRM_1706715769070": tempratureData,
                            "UF_CRM_1706715819770": address
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
                            "TITLE":"styazhka",
                            "UF_CRM_1706712641364": phone,
                            "UF_CRM_1706714277112": square
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