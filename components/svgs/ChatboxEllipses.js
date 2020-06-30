import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={512} height={512} viewBox="0 0 512 512" {...props}>
      <Path
        d="M408 48H104a72.08 72.08 0 00-72 72v192a72.08 72.08 0 0072 72h24v64a16 16 0 0026.25 12.29L245.74 384H408a72.08 72.08 0 0072-72V120a72.08 72.08 0 00-72-72zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SvgComponent
