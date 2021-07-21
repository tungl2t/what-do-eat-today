import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const foodsDirectory = join(process.cwd(), '_foods');

export function getFoodPaths() {
  return fs.readdirSync(foodsDirectory);
}

export function getFoodByPath(path: string, fields: string[] = []) {
  const realPath = path.replace(/\.md$/, '');
  const fullPath = join(foodsDirectory, `${realPath}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'path') {
      items[field] = realPath;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllFoods(fields: string[] = []) {
  const paths = getFoodPaths();
  return paths.map((path) => getFoodByPath(path, fields));
}
