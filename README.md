# 📈 Mercado Libre – Más Vendidos Scraper & Dashboard

Demo full-stack (Python + FastAPI + Playwright / React + Vite + Tailwind) que:

1. **Scrapea** la página pública de _Más vendidos_ de Mercado Libre Perú  
   (`https://www.mercadolibre.com.pe/mas-vendidos`)  
   _Obtiene 5 categorías × 20 productos = 100 ítems._
2. Expone un **API** `GET /mas-vendidos` con la data cacheada 30 min.
3. **Frontend** en React muestra:
   - Selector de categoría (Todas / específica)
   - Carrusel responsivo (4 × desktop, 2 × mobile) con flechas
   - Cards con imagen, precio (actual y tachado) y link externo.

---

## ✨ Demo rápida

```bash
git clone https://github.com/tu-usuario/ml-best-sellers.git
cd ml-best-sellers
make dev       # arranca backend + frontend en modo watch
# → API:     http://localhost:8000/mas-vendidos
# → Front:   http://localhost:5173

(Si no usas make, mira los comandos npm y uvicorn más abajo.)

📂 Estructura

.
├─ backend/                 # FastAPI + Playwright
│   ├─ main.py
│   └─ requirements.txt
└─ frontend/                # React + Vite + Tailwind + react-slick
    ├─ src/
    │   ├─ App.jsx
    │   └─ components/
    ├─ index.html
    ├─ package.json
    └─ vite.config.js


🚀 Backend

Requisitos
Python 3.10+

Playwright (chromium instalado)

Instalación manual

cd backend
python -m venv venv && source venv/Scripts/activate   # en Windows Git Bash
pip install -r requirements.txt
playwright install chromium
uvicorn main:app --host 0.0.0.0 --port 8000

Endpoints útiles

| Método | URL                                  | Descripción                        |
| ------ | ------------------------------------ | ---------------------------------- |
| `GET`  | `/titulo`                            | Solo `<title>` de la página (test) |
| `GET`  | `/mas-vendidos`                      | 5 categorías con 20 productos c/u  |
| `GET`  | `/mas-vendidos?limit_per_category=8` | Limita productos por categoría     |
| `GET`  | `/mas-vendidos?refresh=1`            | Fuerza scrape, ignora caché        |


🔮 Frontend

cd frontend
npm install
npm run dev           # http://localhost:5173


Env var principal:

# .env
VITE_API=http://localhost:8000

🖼️ Tecnologías

| Capa     | Stack                              |
| -------- | ---------------------------------- |
| Scraping | **Playwright** (Chromium headless) |
| API      | **FastAPI**  + Uvicorn             |
| UI       | **React 18** • Vite • Tailwind CSS |
| Slider   | **react-slick** + slick-carousel   |


🐳 Docker (opcional)

docker compose up --build          # backend 0.0.0.0:8000, front 3000

📜 Licencia
MIT © 2025 — <webscrapping>


### Cómo usarlo

1. Crea un archivo llamado **`README.md`** en la raíz de tu repo.
2. Pega el contenido anterior.
3. Ajusta los enlaces, tu nombre, comandos (make, docker) o cualquier sección que no apliquen a tu caso.

¡Con eso tu proyecto queda bien documentado!
```
