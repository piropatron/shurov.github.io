jQuery(document).ready(
    function(){
        var cont = $("#mars-form div.error");
        jQuery('#mars-form').validate(
            {
                debug: true,
                errorContainer: cont ,
                errorLabelContainer: $("ul", cont ),
                wrapper: 'li',
                rules:{
                    name: {
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        cyrillicName: true
                    },
                    last_name:{
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        lastname: true
                    },
                    middle_name:{
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        midlename: true
                    },
                    name_lat:{
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        equalToCyrillic: '#name'
                    },
                    last_name_lat:{
                        required: true,
                        minlength: 3,
                        maxlength: 100,
                        equalToCyrillic: '#last_name'
                    },
                    birstday_day:{
                        required: true,
                        dateSelect: ['#birstday_month','#birstday_day', '#birstday_year']
                    },
                    birstday_month:{
                        required: true,
                        dateSelect: ['#birstday_month','#birstday_day', '#birstday_year']
                    },
                    birstday_year:{
                        required: true,
                        dateSelect: ['#birstday_month','#birstday_day', '#birstday_year']

                    },
                    cell_phone:{
                        required: true,
                        ruPhone: true
                    },
                    education:{
                        required: true
                    },
                    email:{
                        required: true,
                        email: true
                    },
                    marital_status:{
                        required: true
                    },
                    i_not_sick:{
                        required: true
                    }
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