# 3D Model Generator by Arhaan

<p align="center">
  <a href="https://vercel.com/arhaan-girdhars/v0-3-d-model-generator-by-arhaan" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-black?style=for-the-badge" alt="Live Demo" />
  </a>
</p>

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)  
2. Deploy your chats from the v0 interface  
3. Changes are automatically pushed to this repository  
4. Vercel deploys the latest version from this repository  

```shell
# Install dependencies:
npm install

# Run the development server:
npm run dev
```
# Open in browser:
# http://localhost:3000

### Generating a 3D Model from Text

1. Enter a descriptive prompt in the text field at the bottom of the screen  
2. Click the arrow button or press Enter to submit  
3. Wait for the model to generate (progress is shown in the center)  
4. Once complete, the 3D model will be displayed with orbit controls  
5. Use the Download button to save the model  

### Generating a 3D Model from Images

1. Click the image icon in the input area  
2. Select up to 5 reference images  
3. Optionally add a text prompt to guide the generation  
4. Click the arrow button to submit  
5. Wait for the model to generate  
6. Once complete, the 3D model will be displayed with orbit controls  
7. Use the Download button to save the model  

### Adjusting Generation Options

1. Click the sliders icon in the input area  
2. Adjust the following settings:  
   - **Quality**: High (50k), Medium (18k), Low (8k), Extra Low (4k)  
   - **Format**: GLB, USDZ, FBX, OBJ, STL  
   - **Use Hyper**: Toggle for better details  
   - **T/A Pose**: Toggle for human models  
   - **Condition Mode**: Concat or Fuse for multiple inputs  
   - **Material**: PBR or Shaded  
   - **Generation Tier**: Regular or Sketch  
3. Click **Apply Settings** or outside the dialog to close  

## API Information

The application uses the Hyper3D Rodin API for 3D model generation. A public API key is included, so no additional configuration is required.

### API Endpoints

- `/api/rodin` – Proxy to the Hyper3D API  
- `/api/status` – Checks job status  
- `/api/download` – Downloads generated models  
- `/api/proxy-download` – File download proxy  

## Configuration Options

| Option          | Description                       | Values                                |
|-----------------|-----------------------------------|---------------------------------------|
| Quality         | Polygon count                     | high, medium, low, extra-low          |
| Format          | Output file format                | glb, usdz, fbx, obj, stl              |
| Use Hyper       | Enhanced detail                   | true/false                            |
| T/A Pose        | T/A pose for human models         | true/false                            |
| Condition Mode  | Input processing method           | concat, fuse                          |
| Material        | Material type                     | PBR, Shaded                           |
| Generation Tier | Quality vs. speed                 | Regular, Sketch                       |

## Browser Compatibility

Works best in modern WebGL-enabled browsers:

- Chrome (recommended)  
- Firefox  
- Safari  
- Edge  

## Credits

- 3D model generation by [Hyper3D Rodin](https://hyper3d.ai)  
- UI components from [shadcn/ui](https://ui.shadcn.com/)  
- Rendering with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)  

## License

Licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

<p align="center">
  <a href="https://github.com/17arhaan/3d-model-generator" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Source-black?style=for-the-badge&logo=github" alt="Source Code" />
  </a>
</p>

<p align="center">
  Built by Arhaan Girdhar • © 2025
</p>
