import React from 'react'

const IconGrid = () => {
    const gridArray = [
              {
        iconName: "Fully Responsive",
        description: "This theme will look great on any device, no matter the size!"
              },
              {
            iconName: "Bootstrap 5 Ready",
            description: "Featuring the latest build of the new Bootstrap 5 framework!"
              },
              {
            iconName: "Easy to Use",
            description: "Ready to use with your own content, or customize the source files!"
              }]
    


    return (<section className="features-icons bg-light text-center">
            <div className="container">
            <div className="row">
                {gridArray.map((gridArray) => (
                    <div key={gridArray.iconName} className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                            <h3>{gridArray.iconName}</h3>
                            <p className="lead mb-0">{gridArray.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        
      
    
  )
}

export default IconGrid