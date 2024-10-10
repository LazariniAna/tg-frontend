import slugify from "slugify"

export const handleSlug = (title:string) => {
    let slug = String(title).replace(/[ºª$%®!ä]/gm, "");
    slug = slug.replace("–", "longhyphen");
  
    slug = slugify(slug, { lower: true, strict: true });
  
    slug = slug.replace("-or-", "--");
    slug = slug.replace("longhyphen", "");
    return slug;
  }