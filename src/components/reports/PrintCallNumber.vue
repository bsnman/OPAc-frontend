<script setup lang="ts">
import {ref} from "vue"

const printPageElement = ref<HTMLDivElement | null>(null);

const books = [
    {
        library: "JHS",
        area: "GR",
        ddc: "031.02",
        author_number: "G964",
        published_year: 2018,
        accession_number: "0001",
        copy_number: null
    },
    {
        library: "Elem",
        area: "F",
        ddc: null,
        author_number: "A596",
        published_year: 2002,
        accession_number: "0002"
    },
    {
        library: "JHS",
        area: "Fi",
        ddc: "519.2",
        author_number: "S621",
        published_year: 2017,
        accession_number: "0003",
        copy_number: "c.1"
    },
    {
        library: "JHS",
        area: "GR",
        ddc: "031.02",
        author_number: "G964",
        published_year: 2018,
        accession_number: "0004",
        copy_number: null
    },
    {
        library: "Elem",
        area: "F",
        ddc: null,
        author_number: "A596",
        published_year: 2002,
        accession_number: "0005"
    },
    {
        library: "Elem",
        area: "F",
        ddc: null,
        author_number: "A596",
        published_year: 2002,
        accession_number: "0006"
    },
    {
        library: "JHS",
        area: "Fi",
        ddc: "302.34302854678",
        author_number: "B612",
        published_year: 2018,
        accession_number: "0007",
        copy_number: null
    }
]



function print() {
    window.print()
}

</script>

<template>
    <div class="print-call-number">

        <div class="printable">
            <div ref="printPageElement" class="print-page">
                <div v-for="book in [...books, ...books,...books, ...books,...books, ...books]" class="call-number-container" :key="book.accession_number">
                    <p>
                        {{ book.library }}/{{ book.area }}
                    </p>
                    <p>
                        {{ book.ddc }}
                    </p>
                    <p>
                        {{ book.author_number }}
                    </p>
                    <p>
                        {{ book.published_year }}
                    </p>
                    <p>
                        {{ book.copy_number }}
                    </p>
                </div>
            </div>
        </div>

        <button @click="print">Print</button>
    </div>
</template>

<style scoped lang="scss">

.print-call-number {
    width: 640pt
}

.print-page {
    display: flex;
    flex-wrap: wrap;
}

.call-number-container {
    font-weight: bold;
    font-family: "Lucida Sans Unicode";
    font-size: 12pt;
    color: #111;

    min-width: 78pt;
    height: 99pt;
    border: 1px solid #222;
    margin: 12px 7px;
    padding: 3.5pt 8pt;
    page-break-inside: avoid;

    p {
        margin: 0;
        line-height: 20px;
        text-align: left;
    }
}
</style>
