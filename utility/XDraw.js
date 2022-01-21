export class XDraw {
  
  constructor(renderer, scene, camera, drawCallback) {
    this.renderer = renderer
    this.scene = scene
    this.camera = camera
    this.drawCallback = drawCallback
  }

  resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  draw() {
    if(!this.renderer || !this.scene || !this.camera) {
      return ;
    }
    
    var self = this
    function render(time) {
      time *= 0.001;
      if (self.resizeRendererToDisplaySize(self.renderer)) {
        const canvas = self.renderer.domElement;
        self.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        self.camera.updateProjectionMatrix();
      }
      if(self.drawCallback) {
        self.drawCallback()
      }
      self.renderer.render(self.scene, self.camera);
      window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render)
  }

  
}
export default XDraw