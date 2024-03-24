<template>
    <v-data-table height="380" item-value="name" hide-default-footer>
        <template v-slot:item.actions="{ item }">
            <slot name="item-actions" size="small" :item="item"></slot>
        </template>
        <template v-slot:bottom v-if="true">
        </template>
    </v-data-table>
</template>
