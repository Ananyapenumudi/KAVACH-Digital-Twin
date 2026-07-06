export default function SpeedNeedle({ speed }) {

    const angle =

        -120 +

        speed * 240 / 180;

    return (

        <g

            transform={`rotate(${angle} 200 310)`}

        >

            <line

                x1="200"

                y1="310"

                x2="200"

                y2="110"

                stroke="#ef4444"

                strokeWidth="5"

                strokeLinecap="round"

            />

        </g>

    );

}