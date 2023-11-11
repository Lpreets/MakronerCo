import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "bqwh4j0c",
    dataset: "production",
    apiVersion: "2023-11-11",
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}