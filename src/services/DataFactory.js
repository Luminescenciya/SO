import languagesRepository from "./languagesRepository.js";
import eventDraftsRepository from "./eventDraftsRepository.js";
import webResourcesRepository from "./webResourcesRepository.js";
import genreCategoriesRepository from "./genreCategoriesRepository.js";
import cityDraftsRepository from "./cityDraftsRepository.js";
import placeDraftsRepository from "./placeDraftsRepository.js";
import performerDraftsRepository from "./performerDraftsRepository.js";
import imagesRepository from "./imagesRepository.js";

const repositories = {
  languages: languagesRepository,
  eventDrafts: eventDraftsRepository,
  webResources: webResourcesRepository,
  genreCategories: genreCategoriesRepository,
  cityDrafts: cityDraftsRepository,
  placeDrafts: placeDraftsRepository,
  performerDrafts: performerDraftsRepository,
  images: imagesRepository,
};

export const DataFactory = {
  get: (name) => repositories[name],
};
