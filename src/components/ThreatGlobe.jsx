import Globe from 'react-globe.gl'

function ThreatGlobe() {
  return (
    <div className="h-screen">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  )
}

export default ThreatGlobe