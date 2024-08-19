# News Aggregator App

## Project Overview

The News Aggregator App is a frontend web application that aggregates articles from multiple news APIs and displays them in a clean, easy-to-read format.

## APIs Used

This application fetches articles from the following APIs:

- NewsAPI: Provides articles from over 70,000 news sources
- The Guardian API: Provides access to articles from The Guardian
- New York Times API: Allows fetching news from The New York Times

## Prerequisites

- Docker: Ensure that Docker is installed on your machine.
- Node.js (optional): If you are running the app locally without Docker.

## Running the Project Locally (without Docker)

1. Clone the repository: `git clone https://github.com/atulsmania/innoscripta-mvp.git`
2. Navigate to the repository directory: `cd innoscripta-mvp`
3. Run the app: `npm run dev`

## Running the Project Locally (with Docker)

1. Clone the repository: `git clone https://github.com/atulsmania/innoscripta-mvp.git`
2. Navigate to the repository directory: `cd innoscripta-mvp`
3. docker `build -t innoscripta-mvp .`
4. docker `run -p 3000:3000 -d innoscripta-mvp`
5. Visit `http://localhost:3000` in your browser

##
