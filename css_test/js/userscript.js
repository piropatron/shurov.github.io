jQuery(document).ready(
    function(){

        jQuery('#mars-form').validate(
            {
                rules:{
                    name: {
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        lettersonly_kir: true
                    },
                    last_name:{
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        lettersonly_kir: true
                    },
                    middle_name:{
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        lettersonly_kir: true
                    },
                    name_lat:{},
                    last_name_lat:{},
                    birstday_day:{},
                    birstday_month:{},
                    birstday_year:{},
                    cell_phone:{},
                    education:{},
                    email:{},


                    marital_status:{},



                },
                submitHandler: function(){
                    jQuery.post(
                            window.location.protocol +'//'+ window.location.hostname + '/' +jQuery(this.currentForm).closest('form').attr('action'),
                            jQuery(this.currentForm).serialize()
                    ).done(
                        function(response){
                        }
                    ).error(
                        function(){
                            console.log('sdfsdf');
                        }
                    ) ;
                }
            }
        );
    }
);