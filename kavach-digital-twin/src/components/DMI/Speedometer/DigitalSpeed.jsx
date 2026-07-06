export default function DigitalSpeed({ speed }) {

    return (

        <text

            x="200"

            y="210"

            fill="white"

            fontSize="42"

            textAnchor="middle"

            fontWeight="bold"

        >

            {Math.round(speed)}

        </text>

    );

}