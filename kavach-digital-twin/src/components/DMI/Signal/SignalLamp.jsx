export default function SignalLamp({color,active}){

    const colours={

        RED:"#ff2222",

        YELLOW:"#ffd000",

        DOUBLE_YELLOW:"#ffd000",

        GREEN:"#00ff55"

    };

    return(

        <div

            style={{

                width:40,

                height:40,

                borderRadius:"50%",

                background:active?colours[color]:"#444",

                boxShadow:active?`0 0 20px ${colours[color]}`:"none"

            }}

        />

    )

}