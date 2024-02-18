interface StudentHatIconProps {
  size?: number
  className?: string
}

const StudentHatIcon = ({ size, className }: StudentHatIconProps) => {
  return (
    <svg height={size} width={size} viewBox="0 0 512 512" className={className}>
      <rect
        style={{ fill: "#88C5CC" }}
        x="0"
        y="0"
        width="512"
        height="512"
        rx="30"
        ry="30"
      />
      <path
        style={{ fill: "#80B9BF" }}
        d="M456,225.936c0-0.644-2.54-1.788-4.884-2.252L268.388,200.16c-6.724-1.312-17.812-1.452-24.536-0.14
     l-182.94,23.184C58.62,223.656,56,224.228,56,224.956v2.048V228v1.056v0.992v1.136v0.576v0.344v1.132v0.296v0.272v1.476v0.296V236
     l104.38,257.468C189.928,505.384,222.184,512,256,512c114.376,0,211.2-75.02,244.036-178.524L456,225.936z"
      />
      <path
        style={{ fill: "#2D424D" }}
        d="M128,220v112l0,0c4.388,24,60.34,43.6,128,43.6S378.996,356,383.384,332H384V220H128z"
      />
      <path
        style={{ fill: "#253740" }}
        d="M372,220v112l0,0c-4.252,24-57.428,42.116-122.228,43.256c2.064,0.032,4.14,0.2,6.228,0.2
     c67.66,0,123.608-19.456,128-43.456l0,0V220H372z"
      />
      <path
        style={{ fill: "#1E2C33" }}
        d="M448,224v5.036L267.676,206.12c-6.724-1.308-16.464-1.308-23.184,0L68,228.42V228H56v3.184v0.576
     v1.772c0,0.772,2.364,1.556,4.432,2.26l149.352,44.876c6.484,2.224,17.316,2.7,23.968,1.068l217.452-47.008
     c2.276-0.564,4.792-1.212,4.792-1.88v-1.088v-0.696V228L448,224z"
      />
      <path
        style={{ fill: "#2D424D" }}
        d="M456,224.832c0-0.644-2.54-1.24-4.884-1.696l-182.728-23.252c-6.724-1.312-17.812-1.312-24.536,0
     l-182.94,23.252C58.62,223.584,56,224.228,56,224.952V228c0,0.772,2.364,0.856,4.432,1.564l149.352,44.876
     c6.484,2.224,17.316,2.704,23.968,1.072c0,0,222.244-46.84,222.244-47.504L456,224.832L456,224.832z"
      />
      <path
        style={{ fill: "#FFD464" }}
        d="M314,381.252c-3.436,0-6-2.784-6-6.228V264.272l-70.012-23.492c-3.264-1.088-4.792-4.616-3.704-7.884
     s4.744-5.036,7.996-3.936l74.104,24.916c2.548,0.852,7.616,3.44,7.616,6.12v116C324,379.436,317.436,381.252,314,381.252z"
      />
      <path
        style={{ fill: "#E16B5A" }}
        d="M332,388c0,0,0-10.756,0-12.976c0-8.6-7.4-15.58-16-15.58s-16,6.976-16,15.58
     c0,2.22,0,12.976,0,12.976H332z"
      />
      <rect
        x="300"
        y="388"
        style={{ fill: "#FFD464" }}
        width="32"
        height="36"
      />
      <g>
        <rect
          x="304"
          y="388"
          style={{ fill: "#FFE399" }}
          width="4"
          height="36"
        />
        <rect
          x="312"
          y="388"
          style={{ fill: "#FFE399" }}
          width="4"
          height="36"
        />
        <rect
          x="320"
          y="388"
          style={{ fill: "#FFE399" }}
          width="4"
          height="36"
        />
      </g>
    </svg>
  )
}

export default StudentHatIcon
