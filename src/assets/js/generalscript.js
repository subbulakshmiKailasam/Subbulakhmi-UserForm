function gethost(){
  return "https://njs.sparklms.com/"

 //  return "http://localhost:3005/"

}
function gethostURL(){

    return "https://njs.sparklms.com/api/"

  //return "http://localhost:3005/api/"

}
function pathConfig(){
    return "E:\\ANANDAN\\LMS\\SparkLMS\\"
}
function getAppname(){
    return "NJS"
}
function Popover(id){
    $(id).popover();   
}
function getcurrentUSer(){
    return "SparkLMS"
}
function documentonload(){
    if ($(window).width() > 768) {
        $("#sidebarCollapse").click(function() {
            $("#content").toggleClass("addmarginlft", "slow");
        });
        $("#sidebarCollapse").click(function() {
            $("#content").toggleClass("padleft-0", "slow");
        });

    }
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
}

function urlConfig(){
 return { 
   Memberurl : "https://njs.ninetorches.com",    
   CCPaymentURL: "https://svc.sparklms.com//#/transaction/{0}/C?initiatedFrom=UI&userid={1}",
   cardLink:"https://njs-portal.sparklms.com/#/DCV-Verify?GUID={0}&CID={1}",
   dlLink:"https://njs-portal.sparklms.com/#/IBV-Verify?requestcode={0}&BV=LM",
   applyNowLink:'https://njs-apply.sparklms.com/applynow/?id=',
   ReportsURL:"https://njs-analytics.sparklms.com",
   LendMateToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlX2lkIjoiNWU4YzA5YTM1OWQ1ODc3NWQ0ZmRmNWMzIiwiZW52IjoiZGV2IiwiaWF0IjoxNTg2MjM1ODExfQ.Ae9MngsVJisZ7gyi_cozdp3gseOwtGtnId6FO-GMykA"
  }
}  

function draggables(){
     
        console.log("inside draggable method")
        $(".campaignconfigsortable0,.campaignconfigsortable1").sortable({
            connectWith: ".campaignconfigsortable0,.campaignconfigsortable1"
           
        });
        $("#sortable-7").sortable({
            connectWith: "#sortable-7"
        });
      
        $(".inputsearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".tablesearch tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

        $('#411yes').change(function() {
            $('#411input').prop('disabled', false);
        });
        $('#411no').change(function() {
            $('#411input').prop('disabled', true);
        });
      }
      function Sortable(src,dec){
        $("#sortable-20, #sortable-21").sortable({
            connectWith: "#sortable-20, #sortable-21"
        });
      }
       function treeview(){
        $('#basic').simpleTree({
            collapser: $('#collapser'),
            expander: $('#expander'),
            storeState: true
        });
        //$('#selectportfolio').selectpicker();
        //$('#selectproduct').selectpicker();
        
       }
       function tabload(){
     
                    $("#usertab").tabs();
                    $("#loanusertab").tabs({
                        active: 0
                    });
                    $("#cusloanhist").tabs({
                        active: 2
                    });
                    $("#communicationtab").tabs();
                    $("#commtab").tabs();
                    $("#commtab1").tabs();
                    $("#commtab2").tabs();
       }
       function reRender(id){
        $(id).DataTable()
         .rows()
         .draw(false);
       }
      function draggableconfig(){
      
        // $("#sortable-5, #sortable-6").sortable({
        //     connectWith: "#sortable-5, #sortable-6"
        // });
        $(".campaignconfigsortable0,.campaignconfigsortable1").sortable({
            connectWith: ".campaignconfigsortable0,.campaignconfigsortable1"
           
        });
        // $("#sortable-7").sortable({
        //     connectWith: "#sortable-7"
        // });
       
        $(".inputsearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".tablesearch tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

        $('#411yes').change(function() {
            $('#411input').prop('disabled', false);
        });
        $('#411no').change(function() {
            $('#411input').prop('disabled', true);
        });
      }
      function loaddatepicker(){
        $('#validfrom').datepicker();
        $('#validto').datepicker();
      }
      function openModel(id){
        //  console.log("inside open modal")
        $(id).modal({
            backdrop: 'static',
            keyboard: false
        });
     }
     function closeModel(id){
        $(id).modal('hide');
     }

     function hideModel(id){
        $(id).modal('hide');
     } 
      function tableSearch(){
        $(".inputsearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".tablesearch tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
      }
function multiselect(){
      $(document).ready(function() {
        $('.mdb-select').materialSelect();
        });
    }
    function richText(selector){
        $(selector).richText();
    }
        
function draggable(){
    $("#sortable-5,#sortable-6").sortable({
        connectWith: "#sortable-5,#sortable-6"
       
    });

    $("#sortable-8,#sortable-9").sortable({
        connectWith: "#sortable-8,#sortable-9"
       
    });

    $("#sortable-10,#sortable-11").sortable({
        connectWith: "#sortable-10,#sortable-11"
       
    });

    $("#sortable-12,#sortable-13").sortable({
        connectWith: "#sortable-12,#sortable-13"
       
    });
    var count;
    $("#sortable-17,#sortable-18").sortable({
        connectWith: "#sortable-17,#sortable-18",
        receive: function (event, ui) {
            if (++count > 4) {
                $("#sortable-17").sortable("option", { connectWith: "" });

            }
            var $this = $(this);
            if ($this.children('li').length > 5 && $this.attr('id') != "sortable-17") {
                $(ui.sender).sortable('cancel');
            } 
            loadPreview();
        },
        remove: function (event, ui) {
            if (count > 0 && --count <= 5) {
                $("#sortable-17").sortable("option", { connectWith: ".connectedSortable" });

            }
            loadPreview();
        },
        stop: function (event, ui) {
            loadPreview();
        }
    })
    loadPreview();
}

function loadPreview() {
           
    var values = $('#sortable-18 li').map(function () {
        return $(this).text();
    }).get().join(',');

    var names = $('#sortable-18 li').map(function () {
        return $(this).attr('name');
    }).get().join(',');

    var titles = $('#sortable-18 li').map(function () {
        return $(this).attr('title');
    }).get().join(',');
    var quickLinksList = "";
    var ulQuicklist = values.split(",");
    var ulQuicklistnames = names.split(",")
    var ulQuicklistTitles = titles.split(",");

    if (ulQuicklist.length > 0 && ulQuicklist != "") {
        quickLinksList = quickLinksList + "<div class='ConfigQuickLinksSubMenu'>";

        for (i = 0; i < ulQuicklist.length; i++) {

            quickLinksList = quickLinksList +
             "<div class='divanchorConfigQuicklinksItem' ><i class='fa " + ulQuicklistTitles[i] + "'></i><br>&nbsp;&nbsp" + ulQuicklistnames[i] + "</div>";

        }
        quickLinksList = quickLinksList + "</div>";

    }

    $("#previewlink").html(quickLinksList);
}

/**addleads */
function addleadsconfig(){
        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        $(document).ready(function() {
            $('.defaulttable').DataTable({
                responsive: true
            });
        });
        $(document).ready(function() {
            $(".inputsearch").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $(".tablesearch tbody tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });

        $(function() {
            $("#dob").datepicker({
                maxDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
            $("#empstartdate").datepicker({
                maxDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
            $("#lastpaydate").datepicker({
                maxDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
            $("#nextpaydate").datepicker({
                minDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
            $("#secpaydate").datepicker({
                minDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
            $("#oripaydate").datepicker({
                minDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
            $("#accopendate").datepicker({
                minDate: new Date(),
                 changeYear: true ,
                 changeMonth: true,
            });
        });
    }
    
function weekNumbersRangeInMonth(month, year) {
    console.log('year',year)
    year = year || new Date().getFullYear();
    console.log('year',year)
    var yearStart = new Date(year, 0, 1); // 1st Jan of the Year
    var first_day_of_month = new Date(year, month, 1);
    var first_week_number = Math.ceil((((+first_day_of_month - +yearStart) / 86400000) + yearStart.getDay() + 1) / 7);
    var last_day_of_month = new Date();
    //var last_day_of_month = new Date(year, month + 1, 0); // Last date of the Month
    var last_week_number = Math.ceil((((+last_day_of_month - +yearStart) / 86400000) + yearStart.getDay() + 1) / 7);
    console.log('first_week_number',first_week_number,last_week_number)
    return [first_week_number, last_week_number];
  }




 
