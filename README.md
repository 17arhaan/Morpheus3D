# 3D Model Generator by Arhaan

## Deployment

Your project is live at:

**[https://vercel.com/arhaan-girdhars/v0-3-d-model-generator-by-arhaan](https://vercel.com/arhaan-girdhars/v0-3-d-model-generator-by-arhaan)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

```markdown project="3D Model Generator" file="README.md"
...
```

2. Install dependencies:

```shellscript
npm install
```


3. Run the development server:

```shellscript
npm run dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Usage

### Generating a 3D Model from Text

1. Enter a descriptive prompt in the text field at the bottom of the screen
2. Click the arrow button or press Enter to submit
3. Wait for the model to generate (progress is shown in the center of the screen)
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

1. **Quality**: High (50k polygons), Medium (18k), Low (8k), Extra Low (4k)
2. **Format**: GLB, USDZ, FBX, OBJ, STL
3. **Use Hyper**: Toggle for better details
4. **T/A Pose**: Toggle for human models
5. **Condition Mode**: Concat (single object, multiple views) or Fuse (multiple objects)
6. **Material**: PBR or Shaded
7. **Generation Tier**: Regular (quality) or Sketch (speed)



3. Click Apply Settings or outside the dialog to close


## API Information

The application uses the Hyper3D Rodin API for 3D model generation. A public API key is included in the application, so no additional configuration is required.

### API Endpoints

The application includes the following API routes:

- `/api/rodin` - Forwards requests to the Hyper3D API
- `/api/status` - Checks the status of generation jobs
- `/api/download` - Downloads the generated models
- `/api/proxy-download` - Proxies file downloads


## Configuration Options

### Model Generation Options

| Option | Description | Values
|-----|-----|-----
| Quality | Polygon count of the model | high (50k), medium (18k), low (8k), extra-low (4k)
| Format | File format for download | glb, usdz, fbx, obj, stl
| Use Hyper | Enhanced detail generation | true/false
| T/A Pose | T or A pose for human models | true/false
| Condition Mode | How multiple inputs are processed | concat, fuse
| Material | Material type | PBR, Shaded
| Generation Tier | Quality vs. speed | Regular, Sketch


## Browser Compatibility

The application works best in modern browsers that support WebGL:

- Chrome (recommended)
- Firefox
- Safari
- Edge


## Credits

- 3D model generation powered by [Hyper3D Rodin](https://hyper3d.ai)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- 3D rendering with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)


## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
