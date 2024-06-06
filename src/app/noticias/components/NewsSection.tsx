"use client";

import {
  Button,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ReactPaginate from "react-paginate";

import "@/app/pagination.css";
import NewsGrid from "@/components/NewsGrid";
import { NEWS_ITEMS } from "@/data/data";
import { useState } from "react";

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 9; // Number of items per page

  const categories: string[] = Array.from(
    new Set(NEWS_ITEMS.map((item) => item.category))
  );
  categories.unshift("Todas");

  const searchParams = useSearchParams();
  const category = searchParams.get("categoria");

  const getNews = () => {
    let newsItems = [];
    if (!category || category === "Todas") {
      newsItems = NEWS_ITEMS;
    } else {
      newsItems = NEWS_ITEMS.filter((item) => item.category === category);
    }
    // Get current page news items
    const offset = currentPage * PER_PAGE;
    return newsItems.slice(offset, offset + PER_PAGE);
  };

  const news = getNews();

  return (
    <Stack as="section" pb={16}>
      <Container maxW="container.xl">
        <Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
          >
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
              Últimas noticias
            </Heading>
            <Stack direction="row" wrap={"wrap"} spacing={4}>
              {categories.map((category, i) => (
                <Button
                  key={i}
                  colorScheme="primary"
                  size="sm"
                  variant="outline"
                  as={Link}
                  href={`/noticias?categoria=${category}`}
                  scroll={false}
                  onClick={() => setCurrentPage(0)}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </Stack>
          <Divider mb={5} orientation="horizontal" />
          {news.length === 0 ? (
            <Stack direction="row" align="center">
              <AiOutlineSearch size={30} />
              <Text fontSize={{ base: "xl", md: "2xl" }}>
                No hay noticias en esta categoría
              </Text>
            </Stack>
          ) : (
            <NewsGrid news={news} />
          )}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(NEWS_ITEMS.length / PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page"}
            previousClassName={"previous"}
            nextClassName={"next"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"previous-link"}
            nextLinkClassName={"next-link"}
            activeLinkClassName={"active-link"}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default NewsSection;
