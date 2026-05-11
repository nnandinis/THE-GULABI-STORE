'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject, formatError } from '../utils';
import { revalidatePath } from 'next/cache';

export async function getAllArtisans() {
  const data = await prisma.artisan.findMany({
    orderBy: { createdAt: 'desc' },
    include: { products: true },
  });
  return convertToPlainObject(data);
}

export async function getFeaturedArtisans() {
  const data = await prisma.artisan.findMany({
    where: { isFeatured: true },
    orderBy: { createdAt: 'desc' },
    include: { products: true },
  });
  return convertToPlainObject(data);
}

export async function getArtisanById(id: string) {
  const data = await prisma.artisan.findFirst({
    where: { id },
    include: { products: true },
  });
  return convertToPlainObject(data);
}

export async function getArtisansByCraft(craft: string) {
  const data = await prisma.artisan.findMany({
    where: { craft: { contains: craft, mode: 'insensitive' } },
    include: { products: true },
  });
  return convertToPlainObject(data);
}

export async function deleteArtisan(id: string) {
  try {
    const exists = await prisma.artisan.findFirst({ where: { id } });
    if (!exists) throw new Error('Artisan not found');
    await prisma.artisan.delete({ where: { id } });
    revalidatePath('/artisans');
    return { success: true, message: 'Artisan deleted successfully' };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
