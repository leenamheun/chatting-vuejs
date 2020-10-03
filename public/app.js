    
   function FirebaseChat(){ 
       //console.log(init)
       // this.init(); 
    }

   /** * 초기 필드 변수 할당 */ 
   FirebaseChat.prototype.init = function(){ 
 }

   
   /**
     *  첫번째 탭 유저리스트 호출
     */
    FirebaseChat.prototype.loadUserList = function(){
        this.userTemplate = document.getElementById('templateUserList').innerHTML;
        var userRef = this.database.ref('Users');
        userRef.off();
        userRef.orderByChild("userName").once('value', this.getUserList.bind(this));
    }


    /**
     * loadUserList 에서 데이터를 받아 왔을 때
     */
    FirebaseChat.prototype.getUserList  =  function(snapshot) {
      /**  var userListHtml = '';
        var cbDisplayUserList = function(data){
            var val = data.val();
            if(data.key !== this.auth.currentUser.uid){
                userListHtml += _.template(this.userTemplate)({targetUserUid : data.key, profileImg : val.profileImg, userName : val.userName});
            }
        }
        snapshot.forEach(cbDisplayUserList.bind(this));
        this.ulUserList.innerHTML = userListHtml;
        console.log(snapshot)*/

        //var userRef = this.database.ref('Member');
        console.log(this.database)
    }