function add(){

    if($('#categ').val() === '0'){
 
        addTask();
    }
    else if($('#categ').val() === '1'){
        addAppt();
    }
    else  {
        addNote();
    }
}
function addAppt(){
    var list = document.getElementById('sched');
    var times = list.getElementsByTagName('li');
    var li = document.createElement('li');
    var value = Number(document.getElementById('time').value);
    var select = document.getElementById('time');
    var time = select.options[select.selectedIndex].text; 
    var text = $('#descrip').val();
    var fullText = document.createTextNode(time + ' ' + text);
    li.appendChild(fullText);
    li.value = value;
    
    if(text === ''){
        alert('Add a description!');
        return;
    }
    if(times.length === 0){
        list.appendChild(li);        
    }
    else {
        
        var i = 0;
        while(i < times.length){
            if(times[i].value === value){
                alert('You have a schedule conflict. Choose another time');
                return;
            }
            else if(times[i].value > value){    
                //times[i].prepend(li);
                list.insertBefore(li,times[i]);
                return;
            }
            ++i;
        }
        if(i === times.length){
            list.insertBefore(li,times[times.length]);
        }
        
    }
    
}

function addTask(){
    var ul1 = document.getElementById('tasks');
    var li1 = document.createElement('li');
    if($('#descrip').val() === ''){
        alert('Add a description!');
        return;
    }
    li1.appendChild(document.createTextNode($('#descrip').val()));
    ul1.appendChild(li1);
}

function addNote(){
    var ul = document.getElementById('notes');
    var li = document.createElement('li');
    if($('#descrip').val() === ''){
        alert('Add a description!');
        return;
    }
    li.appendChild(document.createTextNode($('#descrip').val()));
    ul.appendChild(li);   
}
$(document).ready(function(){
    $('#categ').change(function(){
        if(this.value === '1'){
            $('#time,#timeLab').css('visibility','visible');
        }
        else{
            $('#time,#timeLab').css('visibility','hidden');
        }            
        
    });
          
    $('#add').click(add);
    
    $('ul').on('click','li',function(){
        $(this).toggleClass('dash');
    });
    
    $('ul').on('dblclick','li',function(){
        $(this).remove();
    });
   
    $('button').click(function(){
        $('li').remove();
    });
    
    $('h4').click(function(){
        $('#help').css('display', 'block');
    });
    
    $('#close').click(function(){
        $('#help').css('display', 'none');
    });
});

