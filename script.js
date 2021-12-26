
class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class linkedList{

    constructor(){
        this.head = null;       
    }

    insertAtFirst(data){
        this.head = new Node(data,this.head);    

    }

    insertAtLast(data){
        let node = new Node(data);
        let current;
        if(this.head==null){
            this.head = node;
        }
        else{
                current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = node;
        }

    }

    insertAt(data,index){

        if(index>0 && index>this.size){
    
                return;
        }

        if(index == 0){
                this.head = new Node(data,this.head);
                return;
            }
       
        const node = new Node(data);
        let current,previous;
        current = this.head;

        let count = 0;
        while(count < index){
            previous = current;  //node that will be before index
            count++;
            current = current.next; //node that will be after index
        }
        node.next = current;
        previous.next = node;



    }

    getAt(index){

        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++;
        }
        console.log("element at " + index + " = " + current.data);

    }

    removeAt(index){

        let current = this.head;
        let previous;
        let count = 0;
        if(index == 0){
            this.head = current.next;
        }
        else{
            while(count<index){
                ++count;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;

        }


    }

    reverse(){
        let prev = null;
        let current = this.head;
        let newp = null;

        while(current !=null){
            newp = current.next;
            current.next  = prev;    //making the first element last(pointing it to null)
            prev = current;
            current = newp;


        }
        this.head = prev;


    }

    findMiddle(){
        let count = 0;
        let current = this.head;
        while(current.next!=null){
            current = current.next;
            ++count;
        }
       return this.getAt(count/2);
    }

    printListData(){
        let current = this.head;   
        let array = []     
        while(current){
            array.push(current.data);
            current = current.next;
        }
        console.log(array.join(' -> '));
    }

    insertBefore(data,index){
        let current = this.head;
        let previous;
        let node = new Node(data);
        let count = 0;
        while(count < index-1 ){
            previous = current;
            current = current.next;
            ++count;
        }
        node.next = current;
        previous.next = node;
     
        

    }

    insertAfter(data,index){
        let current = this.head;
        let previous;
        let count = 0;
        let node = new Node(data);
        while(count <= index){
           previous = current;
           current = current.next;
            ++count;
        }
        node.next = current;
        previous.next = node;
        
    }

    removeByData(data){

        let current = this.head;
        if(current.data == data){
            this.head = current.next;
        }
        let previous;
        while(current.next!=null){
            previous = current;
            current = current.next;
            if(current.data == data){
                previous.next = current.next;
                current = previous;             //update current to previous value
            }
        }
    }

    isEmpty(){
        this.head==null ? console.log(true) : console.log(false);
    }
    
    sizeFind(){
        let current = this.head;
        let count = 1;
        while(current.next!=null){
            ++count;
            current = current.next;
        }
        return count;
    }

    isPalindrome(){

    }

}

const ll = new linkedList();

ll.insertAtFirst(100);
ll.insertAtFirst(200);
ll.insertAtFirst(300);
ll.insertAtLast(400);
ll.insertAtFirst(900);
ll.insertBefore(500,4);
ll.insertAfter(800,5);
ll.insertAt(500,0);
ll.insertAt(500,5);
ll.removeByData(500);
ll.printListData();

console.log("size of linked list = "+ll.sizeFind());
