import os

import dotenv
import uvicorn

dotenv.load_dotenv()


def main(debug=False):
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run("app:app", host=host, port=port, reload=debug)


if __name__ == "__main__":
    main(True)
