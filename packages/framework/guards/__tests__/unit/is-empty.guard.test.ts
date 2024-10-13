import { describe, expect, it } from 'vitest';
import { Guard } from '../../src/index';

describe('isEmpty', () => {
    it('should return true for null', () => {
        expect(Guard.isEmpty(null)).toBe(true);
    });

    it('should return true for undefined', () => {
        expect(Guard.isEmpty(undefined)).toBe(true);
    });

    it('should return false for numbers', () => {
        expect(Guard.isEmpty(0)).toBe(false);
        expect(Guard.isEmpty(123)).toBe(false);
        expect(Guard.isEmpty(-3)).toBe(false);
        expect(Guard.isEmpty(12.3)).toBe(false);
    });

    it('should return false for booleans', () => {
        expect(Guard.isEmpty(true)).toBe(false);
        expect(Guard.isEmpty(false)).toBe(false);
    });

    it('should return true for empty strings', () => {
        expect(Guard.isEmpty('')).toBe(true);
        expect(Guard.isEmpty('   ')).toBe(true);
    });

    it('should return false for non-empty strings', () => {
        expect(Guard.isEmpty('hello')).toBe(false);
        expect(Guard.isEmpty('  hello  ')).toBe(false);
    });

    it('should return false for Date objects', () => {
        expect(Guard.isEmpty(new Date())).toBe(false);
    });

    it('should return true for empty arrays', () => {
        expect(Guard.isEmpty([])).toBe(true);
    });

    it('should return true for arrays with only empty values', () => {
        expect(Guard.isEmpty([null, undefined, '', '   ', []])).toBe(true);
    });

    it('should return false for arrays with non-empty values', () => {
        expect(Guard.isEmpty([1, 'hello', {}])).toBe(false);
    });

    it('should return true for empty objects', () => {
        expect(Guard.isEmpty({})).toBe(true);
    });

    it('should return false for non-empty objects', () => {
        expect(Guard.isEmpty({ key: 'value' })).toBe(false);
    });

    it('should return false for non-empty objects containing empty value', () => {
        expect(Guard.isEmpty({ key: undefined })).toBe(false);
    });
});